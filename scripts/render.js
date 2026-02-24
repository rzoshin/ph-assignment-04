/* ======================================================
   RENDER FUNCTIONS
   ====================================================== */

function renderInterview() {
    const interviewSection = document.getElementById("interview-section");
    interviewSection.classList.add("space-y-4", "mb-5");
    interviewSection.innerHTML = " ";

    for (let job of interviewArray) {
        let div = document.createElement("div");
        div.className = "p-6 bg-base-100 border border-[#F1F2F4] flex justify-between";
        div.innerHTML = `<div> <h4 class="jobName mb-1 text-lg font-semibold"> ${job.jobName}</h4><p class="  bio text-base text-[#64748B] font-regular"> ${job.bio}</p> <p class="description my-5 font-regular text-sm text-[#64748B]"> ${job.description}</p> <div class="state mb-2 py-2 px-3 text-sm font-medium bg-[#e2fee4] w-fit"> ${job.status} </div><p class="details mb-5 text-[#323B49] text-sm"> ${job.details} </p><div class="btn-container space-x-2"><button class="interview btn btn-success btn-outline">INTERVIEW</button><button class="rejected btn btn-error btn-outline">REJECTED</button></div></div> <button class="delete btn btn-circle text-[#64748B]"> <i class="trash fa-regular fa-trash-can"></i> </button>`
        interviewSection.appendChild(div);
    }

    if (interviewArray.length == 0) {
        interviewSection.appendChild(createEmptyState());
    }
}

function renderRejected() {
    const rejectedSection = document.getElementById("rejected-section");
    rejectedSection.classList.add("space-y-4", "mb-5");
    rejectedSection.innerHTML = " ";

    for (let job of rejectedArray) {
        let div = document.createElement("div");
        div.className = "p-6 bg-base-100 border border-[#F1F2F4] flex justify-between";
        div.innerHTML = `<div> 
                <h4 class="jobName mb-1 text-lg font-semibold"> ${job.jobName}</h4>
                <p class="bio text-base text-[#64748B] font-regular"> ${job.bio}</p> 
                <p class="description my-5 font-regular text-sm text-[#64748B]"> ${job.description}</p> 
                <div class="state mb-2 py-2 px-3 text-sm font-medium bg-[#FEE4E2] w-fit"> ${job.status} </div>
                <p class="details mb-5 text-[#323B49] text-sm"> ${job.details} </p>
                <div class="btn-container space-x-2">
                    <button class="interview btn btn-success btn-outline">INTERVIEW</button>
                    <button class="rejected btn btn-error btn-outline">REJECTED</button>
                </div> 
            </div> 
            <button class="delete btn btn-circle text-[#64748B]"> 
                <i class="trash fa-regular fa-trash-can"></i> 
            </button>`
        rejectedSection.appendChild(div);
    }

    if (rejectedArray.length == 0) {
        rejectedSection.appendChild(createEmptyState());
    }
}