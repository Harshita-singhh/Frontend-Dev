class FormBuilder {
    constructor(fields) {
        this.fields = fields;
        this.form = document.createElement('form');
        this.createForm();
    }

    createForm() {
        this.fields.forEach(field => {
            const label = document.createElement('label');
            label.textContent = field.label;
            const input = document.createElement('input');
            input.type = field.type;
            input.name = field.label.toLowerCase();
            this.form.appendChild(label);
            this.form.appendChild(input);
        });

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.type = 'button';
        submitButton.onclick = () => this.getFormData();
        this.form.appendChild(submitButton);

        document.body.appendChild(this.form);
    }

    getFormData() {
        const formData = {};
        this.fields.forEach(field => {
            formData[field.label.toLowerCase()] = this.form[field.label.toLowerCase()].value;
        });
        console.log(formData);
        alert(JSON.stringify(formData, null, 2)); // Display data in an alert
    }
}

// Example usage
const fields = [
    { type: 'text', label: 'Username' },
    { type: 'email', label: 'Email' },
    { type: 'password', label: 'Password' }
];

const formBuilder = new FormBuilder(fields);