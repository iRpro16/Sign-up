function checkPass() {
    const password = document.getElementById("user_pass").value;
    const passwordConfirm = document.getElementById("confirm_password").value;
    
    if(password != passwordConfirm) {
        alert('Passwords do not match.');
        return false;
    }

}
