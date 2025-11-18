import Swal from "sweetalert2";

// ❌ Alerta de error general
export const alertaError = (titulo = "Error", mensaje = "Algo salió mal") => {
  Swal.fire({
    icon: "error",
    title: titulo,
    text: mensaje,
    confirmButtonColor: "#d33",
  });
};

// ✅ Alerta de éxito
export const alertaExito = (titulo = "Éxito", mensaje = "Operación completada") => {
  Swal.fire({
    icon: "success",
    title: titulo,
    text: mensaje,
    confirmButtonColor: "#3085d6",
  });
};

// ⚠️ Alerta de advertencia con confirmación -- implementar en un futuro
export const alertaConfirmacion = async (
  titulo = "¿Estás seguro?",
  mensaje = "Esta acción no se puede deshacer"
) => {
  const resultado = await Swal.fire({
    title: titulo,
    text: mensaje,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí",
    cancelButtonText: "Cancelar",
  });

  return resultado.isConfirmed;
};

// ❌ Clave incorrecta
export const alertaClaveIncorrecta = () => {
  Swal.fire({
    icon: "error",
    title: "Clave incorrecta",
    text: "La clave que ingresaste no es válida.",
    confirmButtonColor: "#3085d6",
  });
};

// 🔄 Alerta con redirección automática
export const alertaRedireccion = (
  titulo = "Redirigiendo...",
  mensaje = "Serás enviado a otra página",
  tiempo = 2000,
  direccion = "/"
) => {
  Swal.fire({
    icon: "info",
    title: titulo,
    html: `<b>${mensaje}</b><br>Redirigiendo en ${tiempo / 1000} segundos...`,
    timer: tiempo,
    timerProgressBar: true,
    showConfirmButton: false,
    allowOutsideClick: false,
  }).then(() => {
    window.location.href = direccion; // 🔥 Redirección final
  });
};
