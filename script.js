const card = document.querySelector(".card-item");
card.addEventListener('mousemove', rotate)

function rotate(event) {
  const cardItem = this.querySelector(".card-body");
  cardItem.style.transform = "rotateX(20deg)"
}



$('#modal1').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});

$('#modal6').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal6 iframe').attr("src", $("#modal6 iframe").attr("src"));
});

$('#modal4').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal4 iframe').attr("src", $("#modal4 iframe").attr("src"));
});
