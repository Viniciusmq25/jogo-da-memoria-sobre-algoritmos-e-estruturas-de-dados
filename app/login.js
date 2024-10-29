const noteInput = document.getElementById('nick')
const noteForm = document.getElementById('form');
const notes = document.getElementById("notes");
const getTime = JSON.parse(localStorage.getItem("time"));
const getNotes = JSON.parse(localStorage.getItem("notes"));

let dados = `${getNotes} → ${getTime}`;

let notesStorage = localStorage.getItem("note")
  ? JSON.parse(localStorage.getItem("notes")) 
  : []; 

noteForm.addEventListener('submit', (e) => {
  e.preventDefault()
  notesStorage.push(noteInput.value);
  localStorage.setItem("notes", JSON.stringify(notesStorage));
  redirecionar()
})

const listBuilder = () => {
  const note = document.createElement("li");
  notes.appendChild(note);
  if (getTime == null){
    note.innerHTML = '*ninguém jogou ainda*'
  } else{
    note.innerHTML = dados;
  }
};

function redirecionar(){
  window.location.href = "Jogo.html"
}

listBuilder()