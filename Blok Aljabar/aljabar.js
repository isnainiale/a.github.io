// const button1 = document.querySelector('td#td1tabel1 button');
// button1.addEventListener('click', function(){
//     const tr = document.getElementById('tr1tabel2');
//     const tdBaru = document.createElement('td');
//     const gambar = new Image( 200,200);
//     gambar.src = 'img/hijau.png';
//     tdBaru.appendChild(gambar);
//     tr.appendChild(tdBaru);
// });

const button2 = document.querySelector('td#td2tabel1 button');
button2.addEventListener('click', function(){
    const tr = document.getElementById('tr2tabel2');
    const tdBaru = document.createElement('td');
    const gambar = new Image(70,200);
    gambar.src = 'img/merah.png';
    tdBaru.appendChild(gambar);
    tr.appendChild(tdBaru);
});

const button3 = document.querySelector('td#td3tabel1 button');
button3.addEventListener('click', function(){
    const tabel = document.getElementById('subtabel1');
    const trBaru = document.createElement('tr');
    const gambar = new Image(200,70);
    gambar.src = 'img/biru.png';
    trBaru.appendChild(gambar);
    tabel.appendChild(trBaru);
});

const button4 = document.querySelector('td#td4tabel1 button');
button4.addEventListener('click', function(){
    const tr = document.getElementById('tr4tabel2');
    const tdBaru = document.createElement('td');
    const gambar = new Image(70,70);
    gambar.src = 'img/kuning.png';
    tdBaru.appendChild(gambar);
    tr.appendChild(tdBaru);
});


const button5 = document.querySelector('td#td5tabel1 button');
button5.addEventListener('click', function(){
    const tabel = document.getElementById('subtabel2');
    const trBaru = document.createElement('tr');
    const gambar = new Image (70,70);
    gambar.src = 'img/kuning.png';
    trBaru.appendChild(gambar);
    tabel.appendChild(trBaru);
});

document.getElementById("open-modal").addEventListener("click", function() {
  document.getElementById("overlay").style.display = "block";
})

document.getElementById("close-modal").addEventListener("click", function() {
  document.getElementById("overlay").style.display = "none";
})

const btn_menu = document.querySelector(".btn-menu");
      const side_bar = document.querySelector(".sidebar");

      btn_menu.addEventListener("click", function () {
        side_bar.classList.toggle("expand");
        changebtn();
      });

      function changebtn() {
        if (side_bar.classList.contains("expand")) {
          btn_menu.classList.replace("bx-menu", "bx-menu-alt-right");
        } else {
          btn_menu.classList.replace("bx-menu-alt-right", "bx-menu");
        }
      }

      const btn_theme = document.querySelector(".theme-btn");
      const theme_ball = document.querySelector(".theme-ball");

      const localData = localStorage.getItem("theme");

      if (localData == null) {
        localStorage.setItem("theme", "light");
      }

      // if (localData == "dark") {
      //   document.body.classList.add("dark-mode");
      //   theme_ball.classList.add("dark");
      // } else if (localData == "light") {
      //   document.body.classList.remove("dark-mode");
      //   theme_ball.classList.remove("dark");
      // }

      btn_theme.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        theme_ball.classList.toggle("dark");
        if (document.body.classList.contains("dark-mode")) {
          localStorage.setItem("theme", "dark");
        } else {
          localStorage.setItem("theme", "light");
        }
      });