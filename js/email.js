await fetch("https://hliquitos.com/email/send-email", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    nombre: "Carlos",
    email: "cliente@correo.com",
    mensaje: "Hola, quiero más información."
  })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));