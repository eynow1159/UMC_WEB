// Select the input and list elements
const taskInput = document.getElementById('taskInput');
const todoTasks = document.getElementById('todoTasks');
const doneTasks = document.getElementById('doneTasks');

// 입력
taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') { // Check if the Enter key is pressed
        event.preventDefault(); // Prevent form submission

        const taskText = taskInput.value.trim(); // Get input value and remove spaces

        if (taskText !== '') {
            addTaskToList(taskText, todoTasks);
            taskInput.value = ''; // Clear the input field
        }
    }
});

// 추가
function addTaskToList(taskText, todoTasks) {
    const listItem = document.createElement('li');

    // // 체크 박스
    // const checkbox = document.createElement('input');
    // checkbox.type = 'checkbox';
    // checkbox.name = 'task';
    // checkbox.value = taskText;

    // 할 일(텍스트)
    const label = document.createElement('label');
    label.textContent = taskText;

    // // Event listener for checkbox
    // checkbox.addEventListener('change', function () {
    //     if (checkbox.checked) {
    //         moveTaskToDone(listItem);
    //     }
    // });

    // // Append checkbox and label to the list item
    // listItem.appendChild(label);
    // listItem.appendChild(checkbox);

    // 버튼(완료)
    const completeButton = document.createElement('button');
    completeButton.textContent = '완료';
    completeButton.className = 'click-btn';
    completeButton.addEventListener('click', function () {
        moveTaskToDone(listItem);
    });

    // 할 일 + 버튼
    listItem.appendChild(label);
    listItem.appendChild(completeButton);

    // 해야 할 일에 추가
    todoTasks.appendChild(listItem);
}

// 완료
function moveTaskToDone(listItem) {
    // const checkbox = listItem.querySelector('input[type="checkbox"]');
    const label = listItem.querySelector('label');
    const completeButton = listItem.querySelector('.click-btn');

    // // Update the checkbox to be disabled
    // checkbox.disabled = true;

    // Add a "done-task" class to style the completed task
    label.classList.add('done-task');

    const deleteButton = completeButton;
    deleteButton.textContent = '삭제';
    deleteButton.className = 'click-btn';
    deleteButton.addEventListener('click', function () {
        deleteFromDone(listItem); // Remove the task entirely
    });

    // 해낸 일에 추가
    doneTasks.appendChild(listItem);
}

// 삭제
function deleteFromDone(listItem) {
    listItem.remove(); // Remove the task from the Done Tasks list
}
