let appData = {
    name: 'Gmail',
    mailboxes: [
        'inbox',
        'junk',
        'sent',
        'drafts',
        'spam',
        'trash'
    ],
    contacts: [
        { name: '4th Generation', email: 'george555@gmail.com', lastMessage: "I won't be in class today" },
        { name: 'Darlene Oet', email: 'dOet@icloud.com', lastMessage: "Today, we are going to rock it!" },
        { name: 'Pete B', email: 'pete@work.com', lastMessage: "Meeting postponed to tomorrow" }
    ],
    emails: [
        {
            id: 1,
            subject: 'github-classroom invited you to Stiegler-EdTech-CTAC-Cohort-6/fun-times-with-math-Mscatipilr',
            body: '@github-classroom plus @Mscatipilr @github-classroom[bot] has invited you to collaborate on the Stiegler-EdTech-CTAC-Cohort-6/fun-times-with-math-Mscatipilr repository...',
            sender: 'noreply@github.com',
            recipient: 'joannpellis@gmail.com',
            date: 'Jun 11, 2024, 9:45 AM',
            mailbox: 'inbox'
        },
        {
            id: 2,
            subject: '[Stiegler-EdTech-CTAC-Cohort-6/fun-times-with-math-Mscatipilr] Run failed: Autograding Tests - main (f5b0a77)',
            body: 'Autograding Tests: All jobs have failed',
            sender: 'notifications@github.com',
            recipient: 'joannpellis@gmail.com',
            date: 'Jun 11, 2024, 11:15 AM',
            mailbox: 'inbox'
        },
        {
            id: 3,
            subject: 'Your Daily Digest for Mon, 6/10 is ready to view',
            body: 'Expected today: 2 items.',
            sender: 'USPSInformeddelivery@email.informeddelivery.usps.com',
            recipient: 'joannpellis@gmail.com',
            date: 'Jun 10, 2024, 7:35 AM',
            mailbox: 'inbox'
        },
        {
            id: 4,
            subject: 'Your Order Has Been Shipped',
            body: 'Your order #12345 has been shipped and is on its way.',
            sender: 'orders@shop.com',
            recipient: 'joannpellis@gmail.com',
            date: 'Jun 10, 2024, 3:15 PM',
            mailbox: 'junk'
        },
        {
            id: 5,
            subject: 'Reminder: Doctor\'s Appointment',
            body: 'This is a reminder for your doctor\'s appointment on June 12 at 9 AM.',
            sender: 'appointments@clinic.com',
            recipient: 'joannpellis@gmail.com',
            date: 'Jun 10, 2024, 2:00 PM',
            mailbox: 'spam'
        },
        {
            id: 6,
            subject: 'Update Schedule',
            body: 'I may not be able to make it by 6...',
            sender: 'joannpellis@gmail.com',
            recipient: 'ladybug3408@yahoo.com',
            date: 'Jun 11, 2024, 1:00 PM',
            mailbox: 'drafts'
        }
    ]
}

let mailboxNames = appData.mailboxes;
console.log(mailboxNames);

let emailList = appData.emails;
console.log(emailList);


let secondEmailText = appData.emails[1].body;
console.log(secondEmailText);

function sendDraftEmail(emailId) {
    let draftEmail = appData.emails.find(email => email.id === emailId && email.mailbox === 'drafts');
    if (draftEmail) {
        draftEmail.mailbox = 'sent';
        console.log(`Draft email with ID ${emailId} has been sent.`);
    } else {
        console.log(`Draft email with ID ${emailId} not found or already sent.`);
    }
}

sendDraftEmail(6);


function addDraftEmail(subject, body, sender, recipient) {
    let newEmail = {
        id: appData.emails.length + 1,
        subject: subject,
        body: body,
        sender: sender,
        recipient: recipient,
        date: new Date().toISOString().split('T')[0],
        mailbox: 'drafts'
    };
    appData.emails.push(newEmail);
    console.log('Draft email added.');
}

addDraftEmail('Hello!', 'Have not talked to you in a while...', 'joannpellis@gmail.com', 'todlery@hotmail.com');

