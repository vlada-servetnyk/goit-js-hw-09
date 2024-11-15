const formData = {
    email: "",
    message: "",
};

const form = document.querySelector(".feedback-form");
const input = form.querySelector(".form-input");
const textarea = form.querySelector(".form-textarea");


const inputData = () => {
    formData.email = input.value.trim();
    formData.message = textarea.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};
form.addEventListener("input", inputData);


const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
if (savedData) {
    input.value = savedData.email || "";
    textarea.value = savedData.message || "";
};

    

const handleSubmit = (event) => {
    event.preventDefault();
   if (input.value === "" || textarea.value === "") {
       alert("Fill please all fields")
       return
    } 
    localStorage.removeItem("feedback-form-state");
    input.value = "";
    textarea.value = "";
}

form.addEventListener("submit", handleSubmit)
