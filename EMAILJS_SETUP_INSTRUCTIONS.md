# EmailJS Template Setup Instructions

I've created two professional email templates for your contact form:

1. **Reply Template** (`EMAIL_TEMPLATE_REPLY.html`) - Auto-reply sent to users who contact you
2. **Notification Template** (`EMAIL_TEMPLATE_NOTIFICATION.html`) - Notification sent to you when someone contacts you

## How to Set Up in EmailJS

### Step 1: Log in to EmailJS

1. Go to https://dashboard.emailjs.com/
2. Log in to your account

### Step 2: Update the Reply Template (Auto-Reply to Users)

1. Navigate to **Email Templates** in the left sidebar
2. Find your template: `template_lc7m0db` (or create a new one)
3. Click **Edit**
4. In the **Content** section, select **HTML** mode
5. Copy the entire content from `EMAIL_TEMPLATE_REPLY.html`
6. Paste it into the template editor
7. Make sure these variables are set correctly:
   - `{{from_name}}` - User's name
   - `{{message}}` - User's message
8. Set the **Subject** to: `Thank You for Contacting Mehdi Raza`
9. Click **Save**

### Step 3: Update the Notification Template (Email to You)

1. Navigate to **Email Templates** in the left sidebar
2. Create a **new template** or edit an existing one
3. In the **Content** section, select **HTML** mode
4. Copy the entire content from `EMAIL_TEMPLATE_NOTIFICATION.html`
5. Paste it into the template editor
6. Make sure these variables are set correctly:
   - `{{from_name}}` - User's name
   - `{{from_email}}` - User's email
   - `{{message}}` - User's message
7. Set the **Subject** to: `New Contact Form Submission from {{from_name}}`
8. Set the **To Email** to: `mehdirazajaffri@gmail.com`
9. Click **Save**

### Step 4: Update Your Contact Form (Optional - for Dual Emails)

If you want to send both emails (notification to you + auto-reply to user), you'll need to make two API calls in your Contact.jsx:

```javascript
// Send notification to you
emailjs.send(
  'service_219wh0c',
  'template_notification_id', // Your notification template ID
  {
    from_name: form.name,
    from_email: form.email,
    message: form.message,
  },
  'NNh2ko6PznfUSvKsA'
);

// Send auto-reply to user
emailjs.send(
  'service_219wh0c',
  'template_lc7m0db', // Your reply template ID
  {
    from_name: form.name,
    message: form.message,
  },
  'NNh2ko6PznfUSvKsA'
);
```

## Template Variables

The templates use EmailJS variables that are automatically replaced:

- `{{from_name}}` - The name entered in the contact form
- `{{from_email}}` - The email entered in the contact form
- `{{message}}` - The message entered in the contact form
- `{{to_name}}` - Your name (if set)
- `{{to_email}}` - Your email address

## Customization

You can customize the templates by:

1. **Colors**: Change the color scheme by modifying the hex codes:
   - Header background: `#1a1a1a` (dark gray)
   - Text colors: `#333333`, `#666666`, etc.

2. **Content**: Edit the text in the templates to match your style

3. **Response Time**: Update the "24-48 hours" text in the reply template

4. **Social Links**: Add links to your LinkedIn, GitHub, etc. in the footer

## Testing

After setting up:

1. Test the form on your website
2. Check that you receive the notification email
3. Check that the user receives the auto-reply
4. Verify all variables are being replaced correctly

## Notes

- The templates are mobile-responsive and work in all major email clients
- The HTML uses inline styles for maximum compatibility
- The design matches a professional portfolio aesthetic
- Both templates are ready to use - just copy and paste into EmailJS
