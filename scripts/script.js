
// Theme button
let currentIndex = 0;

document.getElementById('theme-btn').addEventListener('click', function() {
    const colors = ["#974545", "#459790", "#974564", "#9661a5", "#4b7557", "#252424", "#e1e3eb"];
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
});

// Live Date time
function updateDate() {
    let now = new Date();
    let formattedDate = now.toLocaleString('en-US', {
        weekday: 'long',
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    });

    document.getElementById("live-date").innerText = formattedDate;
}


updateDate();

// Blog page
document.getElementById('blog-page')
    .addEventListener('click', function() {
        window.location.href = "./blog.html"
    })

// Activity Log Clear History Button 
document.getElementById('btn-clear-his')
    .addEventListener('click', function() {
        const activityLog = document.getElementById('activity-logs');
        activityLog.innerHTML = ''
    });




// Button 1
document.getElementById('btn-1')
    .addEventListener('click', function() {
        alert('Board updated Successfully')
        let taskEle = document.getElementById('task-as')
        let taskEleValue = parseInt(taskEle.innerText);
        let taskEleValueMinus = taskEleValue - 1;
        taskEle.innerText = taskEleValueMinus;
        let navValue = document.getElementById('nav-increase');
        let navValueInt = parseInt(navValue.innerText)
        let navValuePlus = navValueInt + 1;
        navValue.innerText = navValuePlus;
        let btn = document.getElementById('btn-1');
        btn.style.opacity = "0.3";
        btn.style.backgroundColor = "bg-indigo-600";
        btn.style.pointerEvents = "none";
        if (navValuePlus > 28) {
            alert("congrates!!! You have completed all the current task")
        }
        let now = new Date();
        let formattedTime = now.toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true // 12-hour format (AM/PM)
        });
        let task = document.getElementById('fix-mobile')
        let taskName = task.innerText;
        let activityLog = document.getElementById('activity-logs')
        let newParagraph = document.createElement('p');

        newParagraph.classList.add(
            'p-4',
            'bg-[#e1e3eb]',
            'rounded-lg',
            'shadow-md', 'text-gray-700', 'font-medium', 'mt-2',
            'ml-2',
            'mr-2'
        );
        newParagraph.innerText = `You have Complete The Task ${taskName} at ${formattedTime}`;
        activityLog.appendChild(newParagraph)
    })





document.getElementById('btn-2')
    .addEventListener('click', function() {
        alert('Board updated Successfully')
        let taskEle = document.getElementById('task-as')
        let taskEleValue = parseInt(taskEle.innerText);
        let taskEleValueMinus = taskEleValue - 1;
        taskEle.innerText = taskEleValueMinus;
        let navValue = document.getElementById('nav-increase');
        let navValueInt = parseInt(navValue.innerText)
        let navValuePlus = navValueInt + 1;
        navValue.innerText = navValuePlus;
        let btn = document.getElementById('btn-2');
        btn.style.opacity = "0.3";
        btn.style.backgroundColor = "bg-indigo-600";
        btn.style.pointerEvents = "none";
        if (navValuePlus > 28) {
            alert("congrates!!! You have completed all the current task")
        }
        let now = new Date();
        let formattedTime = now.toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true // 12-hour format (AM/PM)
        });
        let task = document.getElementById('add-pay')
        let taskName = task.innerText;
        let activityLog = document.getElementById('activity-logs')
        let newParagraph = document.createElement('p');

        newParagraph.classList.add(
            'p-2',        // Padding
            'bg-[#e1e3eb]', // Light blue background
            'rounded-lg',
            'shadow-md',
            'text-gray-700',
            'font-medium',
            'mt-2',
            'ml-2',
            'mr-2'
        );
        newParagraph.innerText = `You have Complete The Task ${taskName} at ${formattedTime}`;
        activityLog.appendChild(newParagraph)
    })




document.getElementById('btn-3')
    .addEventListener('click', function() {
        alert('Board updated Successfully')
        let taskEle = document.getElementById('task-as')
        let taskEleValue = parseInt(taskEle.innerText);
        let taskEleValueMinus = taskEleValue - 1;
        taskEle.innerText = taskEleValueMinus;
        let navValue = document.getElementById('nav-increase');
        let navValueInt = parseInt(navValue.innerText)
        let navValuePlus = navValueInt + 1;
        navValue.innerText = navValuePlus;
        let btn = document.getElementById('btn-3');
        btn.style.opacity = "0.3";
        btn.style.backgroundColor = "bg-indigo-600";
        btn.style.pointerEvents = "none";
        if (navValuePlus > 28) {
            alert("congrates!!! You have completed all the current task")
        }
        let now = new Date();
        let formattedTime = now.toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true // 12-hour format (AM/PM)
        });
        let task = document.getElementById('add-new')
        let taskName = task.innerText;
        let activityLog = document.getElementById('activity-logs')
        let newParagraph = document.createElement('p');

        newParagraph.classList.add(
            'p-2',        // Padding
            'bg-[#e1e3eb]', // Light blue background
            'rounded-lg',
            'shadow-md',
            'text-gray-700',
            'font-medium',
            'mt-2',
            'ml-2',
            'mr-2'
        );
        newParagraph.innerText = `You have Complete The Task ${taskName} at ${formattedTime}`;
        activityLog.appendChild(newParagraph)
    })



document.getElementById('btn-4')
    .addEventListener('click', function() {
        alert('Board updated Successfully')
        let taskEle = document.getElementById('task-as')
        let taskEleValue = parseInt(taskEle.innerText);
        let taskEleValueMinus = taskEleValue - 1;
        taskEle.innerText = taskEleValueMinus;
        let navValue = document.getElementById('nav-increase');
        let navValueInt = parseInt(navValue.innerText)
        let navValuePlus = navValueInt + 1;
        navValue.innerText = navValuePlus;
        let btn = document.getElementById('btn-4');
        btn.style.opacity = "0.3";
        btn.style.backgroundColor = "bg-indigo-600";
        btn.style.pointerEvents = "none";
        if (navValuePlus > 28) {
            alert("congrates!!! You have completed all the current task")
        }
        let now = new Date();
        let formattedTime = now.toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true // 12-hour format (AM/PM)
        });
        let task = document.getElementById('fix-video')
        let taskName = task.innerText;
        let activityLog = document.getElementById('activity-logs')
        let newParagraph = document.createElement('p');

        newParagraph.classList.add(
            'p-2',        // Padding
            'bg-[#e1e3eb]', // Light blue background
            'rounded-lg',
            'shadow-md',
            'text-gray-700',
            'font-medium',
            'mt-2',
            'ml-2',
            'mr-2'
        );
        newParagraph.innerText = `You have Complete The Task ${taskName} at ${formattedTime}`;
        activityLog.appendChild(newParagraph)
    })


document.getElementById('btn-5')
    .addEventListener('click', function() {
        alert('Board updated Successfully')
        let taskEle = document.getElementById('task-as')
        let taskEleValue = parseInt(taskEle.innerText);
        let taskEleValueMinus = taskEleValue - 1;
        taskEle.innerText = taskEleValueMinus;
        let navValue = document.getElementById('nav-increase');
        let navValueInt = parseInt(navValue.innerText)
        let navValuePlus = navValueInt + 1;
        navValue.innerText = navValuePlus;
        let btn = document.getElementById('btn-5');
        btn.style.opacity = "0.3";
        btn.style.backgroundColor = "bg-indigo-600";
        btn.style.pointerEvents = "none";
        if (navValuePlus > 28) {
            alert("congrates!!! You have completed all the current task")
        }
        let now = new Date();
        let formattedTime = now.toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true // 12-hour format (AM/PM)
        });
        let task = document.getElementById('ai-integrate')
        let taskName = task.innerText;
        let activityLog = document.getElementById('activity-logs')
        let newParagraph = document.createElement('p');

        newParagraph.classList.add(
            'p-2',
            'bg-[#e1e3eb]',
            'rounded-lg',
            'shadow-md',
            'text-gray-700',
            'font-medium',
            'mt-2',
            'ml-2',
            'mr-2'
        );
        newParagraph.innerText = `You have Complete The Task ${taskName} at ${formattedTime}`;
        activityLog.appendChild(newParagraph)
    })


document.getElementById('btn-6')
    .addEventListener('click', function() {
        alert('Board updated Successfully')
        let taskEle = document.getElementById('task-as')
        let taskEleValue = parseInt(taskEle.innerText);
        let taskEleValueMinus = taskEleValue - 1;
        taskEle.innerText = taskEleValueMinus;
        let navValue = document.getElementById('nav-increase');
        let navValueInt = parseInt(navValue.innerText)
        let navValuePlus = navValueInt + 1;
        navValue.innerText = navValuePlus;
        let btn = document.getElementById('btn-6');
        btn.style.opacity = "0.3";
        btn.style.backgroundColor = "bg-indigo-600";
        btn.style.pointerEvents = "none";
        if (navValuePlus > 28) {
            alert("congrates!!! You have completed all the current task")
        }
        let now = new Date();
        let formattedTime = now.toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true // 12-hour format (AM/PM)
        });
        let task = document.getElementById('probashi-site')
        let taskName = task.innerText;
        let activityLog = document.getElementById('activity-logs')
        let newParagraph = document.createElement('p');
        newParagraph.classList.add(
            'p-2',
            'bg-[#e1e3eb]',
            'rounded-lg',
            'shadow-md',
            'text-gray-700',
            'font-medium',
            'mt-2',
            'ml-2',
            'mr-2'
        );
        newParagraph.innerText = `You have Complete The Task ${taskName} at ${formattedTime}`;
        activityLog.appendChild(newParagraph)
    })



