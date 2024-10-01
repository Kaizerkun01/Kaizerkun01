import { contact, IUser } from './github'

export default class ME implements IUser {
    public static firstName = 'Kaizer'
    public static lastName = 'Kun'
    public static username = 'Kaizerkun01'
    public static aliases = ['well']
    public static skills = ['TypeScript', 'JavaScript', 'NodeJS', 'C', 'EJS', 'Express', 'NoSQL']
    public static info = {
        age: 17,
        country: 'India',
        org: 'None',
        likes: ['TypeScript', 'Zelda Series', 'JJBA Series', 'Well.....'],
        hobbies: ['Manga', 'Shipping', 'Music'],
        reach: [
            {
                name: contact.Discord,
                username: 'Kaizer#4688'
            },
            {
                name: contact.WhatsApp,
                url: 'https://wa.me/+919832888695?text=Well...'
            }
        ]
    }
    public static projects = [
        {
            name: 'Quantum-private',
            homepage: 'https://github.com/Kaizerkun01/Quantum-private#readme',
            repo: 'https://github.com/Kaizerkun01/Quantum-private',
            language: 'TypeScript',
            onging: true
        }
    ]
}
