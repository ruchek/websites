# EmailJS Setup Instructions

To enable the contact form to send emails directly from the application, you need to set up EmailJS:

## Steps:

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Add Email Service**
   - In EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use these template variables:
     ```
     From: {{from_name}} <{{from_email}}>
     Subject: {{subject}}
     
     Message:
     {{message}}
     
     Reply to: {{reply_to}}
     ```

4. **Get Configuration Values**
   - Service ID: Found in "Email Services" section
   - Template ID: Found in "Email Templates" section  
   - Public Key: Found in "Account" > "General" section

5. **Update Environment Variables**
   - Copy `.env.example` to `.env`
   - Replace the placeholder values with your actual EmailJS credentials:
     ```
     REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
     REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
     REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
     ```

6. **Restart Development Server**
   - Run `npm start` to restart with new environment variables

## Testing

After setup, test the contact form:
- Fill out all required fields
- Click "Send Message"
- Check your email for the received message
- Check browser console for any errors

## Troubleshooting

- Ensure environment variables are correctly named (must start with `REACT_APP_`)
- Check EmailJS dashboard for service status
- Verify template variables match the code
- Check browser console for error messages