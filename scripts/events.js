/* ======================================================
   EVENT DELEGATION
   ====================================================== */

const mainContainer = document.querySelector("main");

mainContainer.addEventListener("click", function (event) {

    /* ================= INTERVIEW BUTTON ================= */
    if (event.target.classList.contains("interview")) {
        const parent = event.target.parentNode.parentNode;
        parent.querySelector(".state").innerText = "INTERVIEW";

        const cardInfo = extractCardData(parent);

        const jobExist = interviewArray.find(job => job.jobName == cardInfo.jobName);
        const rejectedExist = rejectedArray.find(job => job.jobName == cardInfo.jobName);

        if (!jobExist) {
            interviewArray.push(cardInfo);
        }

        if (rejectedExist) {
            rejectedArray = rejectedArray.filter(job => job.jobName != cardInfo.jobName);
            headCount.innerText = rejectedArray.length;
            renderRejected();
        }

        calculateCount();
        renderInterview();
    }

    /* ================= REJECTED BUTTON ================= */
    else if (event.target.classList.contains("rejected")) {
        const parent = event.target.parentNode.parentNode;
        parent.querySelector(".state").innerText = "REJECTED";

        const cardInfo = extractCardData(parent);

        const jobExist = rejectedArray.find(job => job.jobName == cardInfo.jobName)
        const interviewExist = interviewArray.find(job => job.jobName == cardInfo.jobName);

        if (!jobExist) {
            rejectedArray.push(cardInfo);
        }

        if (interviewExist) {
            interviewArray = interviewArray.filter(job => job.jobName != cardInfo.jobName);
            headCount.innerText = interviewArray.length;
            renderInterview();
        }

        calculateCount();
        renderRejected();
    }

    /* ================= DELETE (ICON) ================= */
    else if (event.target.classList.contains("trash")) {
        const parent = event.target.parentNode.parentNode;
        const grandParent = parent.parentNode;

        parent.remove();
        headCount.innerText = grandParent.children.length;

        if (grandParent.id == "interview-section") {
            interviewCount.innerText = grandParent.children.length;
        }

        if (grandParent.id == "rejected-section") {
            rejectedCount.innerText = grandParent.children.length;
        }
        if (grandParent.id == "jobs-card") {
            totalCount.innerText = grandParent.children.length;
        }
        
        if (grandParent.children.length == 0) {
            grandParent.appendChild(createEmptyState());
        }
    }

    /* ================= DELETE (BUTTON) ================= */
    else if (event.target.classList.contains("delete")) {
        const parent = event.target.parentNode;
        const grandParent = parent.parentNode;

        parent.remove();
        headCount.innerText = grandParent.children.length;

        if (grandParent.id == "interview-section") {
            interviewCount.innerText = grandParent.children.length;
        }

        if (grandParent.id == "rejected-section") {
            rejectedCount.innerText = grandParent.children.length;
        }
        if (grandParent.id == "jobs-card") {
            totalCount.innerText = grandParent.children.length;
        }
        if (grandParent.children.length == 0) {
            grandParent.appendChild(createEmptyState());
        }
    }
});