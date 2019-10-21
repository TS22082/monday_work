$(document).ready(function() {
  // $('#submit').on('click', function(event) {
  //   event.preventDefault();
  //   const text = $('#todo')
  //     .val()
  //     .trim();
  //   localStorage.clear();
  //   localStorage.setItem('todo', text);
  //   $('#text').text(localStorage.getItem('todo'));
  // });

  let todos = localStorage.getItem('todos').split(',');

  renderTodos(todos);

  $('#submit').on('click', function(event) {
    event.preventDefault();
    $('#todoList').empty();
    const text = $('#todo')
      .val()
      .trim();
    todos.push(text);
    localStorage.setItem('todos', todos);
    let storedTodos = localStorage.getItem('todos').split(',');
    renderTodos(storedTodos);
  });

  $(document).on('click', 'button', function() {
    var arrayIndex = $(this).attr('data');

    deleteFromLocal(arrayIndex, todos);
    $('#todoList').empty();
    renderTodos(todos);
  });

  function renderTodos(array) {
    array.map((todo, index) => {
      let todoText = $('<p>');
      let button = $('<button>');

      button.attr('data', index);
      button.text('x');

      todoText.text(todo);
      todoText.prepend(button);

      $('#todoList').append(todoText);
    });
  }

  function deleteFromLocal(num, arr) {
    arr.splice(num, 1);
    localStorage.setItem('todos', arr);
  }
});

// 1 -8
