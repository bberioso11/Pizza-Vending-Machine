const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
});

function startScan() {
  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    .then(function (stream) {
      let video = document.getElementById("preview");
      video.srcObject = stream;
      video.setAttribute("playsinline", true);
      video.play();
      scanQRCode(video);
    });
}

function scanQRCode(video) {
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");
  let stopScanning = false;

  async function scan() {
    if (stopScanning) {
      return;
    }
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      let code = jsQR(imageData.data, imageData.width, imageData.height);
      let tableDetails = "";
      if (code) {
        let order = jsonConverter(code.data);
        const api = await fetch(`/order/validate/${order.uuid}`, {
          method: "GET",
        });

        const response = await api.json();

        stopScanning = true;
        if (!response.isSuccess) {
          Swal.fire({
            title: response.message,
            icon: "error",
            timer: 10000,
            timerProgressBar: true,
            showConfirmButton: false,
          }).then(() => {
            stopScanning = false;
            document.querySelector("#order-details").innerHTML = "";
            requestAnimationFrame(scan);
          });
        } else {
          order.products.forEach((product) => {
            tableDetails += `
          <tr>
            <td>${product.product_name}</td>
            <td>${product.quantity}</td>
          </tr>`;
          });
          document.querySelector("#order-details").innerHTML = tableDetails;
          Toast.fire({
            icon: "success",
            title: "Your order will now be processed.",
          }).then(async () => {
            const captureOrder = await fetch(`/order/capture/${order.uuid}`, {
              method: "get",
            });

            const captureResponse = await captureOrder.json();

            for await (const product of captureResponse) {
              for (let i = 0; i < product.quantity; i++) {
                Swal.fire({
                  title: "Please wait while we process your order.",
                  icon: "info",
                  didOpen: () => {
                    Swal.showLoading();
                  },
                });
                const initOrder = await fetch(`/order/start/${product.name}`);
                const responseOrder = await initOrder.json();
                await Swal.fire({
                  title: responseOrder.message,
                  icon: "success",
                  timer: 15000,
                  timerProgressBar: true,
                  showConfirmButton: false,
                });
              }
            }
            const finish = await fetch(`/order/finish/${order.uuid}`, {
              method: "GET",
            });
            console.log(await finish.json());
            stopScanning = false;
            document.querySelector("#order-details").innerHTML = "";
            requestAnimationFrame(scan);
          });
        }
      }
    }
    requestAnimationFrame(scan);
  }

  const jsonConverter = (data) => {
    try {
      return JSON.parse(data);
    } catch (err) {
      requestAnimationFrame(scan);
    }
  };

  scan();
}

startScan();
