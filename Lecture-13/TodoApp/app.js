const inp = document.getElementById('inp');
const btn = document.getElementById('addTodo');
const list = document.getElementById('list');

btn.onclick = function (e) {

    const todoText = inp.value;
    const li = document.createElement('li');
    li.innerText = todoText;

    li.onclick = function (e) {
        console.log(e.target);
        e.target.remove();
    }

    list.append(li);

    inp.value = "";
}