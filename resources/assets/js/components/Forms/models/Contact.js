export const CONTACT = {
    name: {
        tag: 'input',
        type: 'text',
        label: 'Name *'
    },
    email: {
        tag: 'input',
        type: 'email',
        label: 'Email address *'
    },
    message: {
        tag:'textarea',
        type:'textarea',
        label:'Your message *',
        rows: 4
    },
    captcha: {
        tag: 'captcha',
        type: 'captcha',
        label: 'captcha',
        siteKey: process.env.CAPTCHA_KEY,
        custom: true
    }
}
