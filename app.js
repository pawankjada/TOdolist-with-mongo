const saveTask = function (e) {
    e.preventDefault();
    const inputTask = $('#input-task').val();
    $('#input-task').val('')
    hideModal(e);
    const taskData = {
        task: inputTask,
    }
    $.post('/api/task', taskData)
        .then(function (data) {
            render(data)
        })

}

$("#submit").on('click', saveTask)
const render = function (taskData) {
    $('.newtask').append(`<form>
    <ul>
        <li>
            <input type="checkbox" name="todo1" value="itemone" class="check">
            <i class="far fa-check-square unchecked"></i>
            <i class="fas fa-check-square checked"></i> -->
            <p class="task">${taskData.task}</p>
            <i data-id=${taskData._id} id='delete' class="fas fa-times"></i>
        </li>


    </ul>
</form>`)
}
$('#x').on('click', '#delete', function () {
    const id = $(this).data('id')
    $.ajax({
            method: 'delete',
            url: `/api/task/${id}`

        })
        .then(getTask());
})


const getTask = function () {
    $('.newtask').empty()
    $.get('/api/task')
        .then(function (serverData) {
            for (let i = 0; i < serverData.length; i++) {
                render(serverData[i]);
            }
        })
}
getTask();

function updateTodo(todo) {
    $.ajax({
        method: "PUT",
        url: "/api/task",
        data: task
    }).then(saveTask());
}