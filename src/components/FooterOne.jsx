import './FooterOne.css';

function FooterOne() {
    const notes = [
        {
            id: 31,
            title: 'Certified B Corp',
            paragraph: 'We meet the highest verified standards of social and environmental performance, transparency and accountability.'
        },
        {
            id: 32,
            title: 'Leaping Bunny approved',
            paragraph: 'Our formulations are approved as cruelty free under the Cruelty Free International Leaping Bunny programme.'
        },
        {
            id: 33,
            title: 'PETA recognition',
            paragraph: 'We appear on PETA\'s internationally recognised vegan and cruelty-free lists.'
        },
    ]

    return <div className='footer-one'>
        {notes?.map((note) => (
            <div key={note.id}>
                <p className='footer-one-title'>{note.title}</p>
                <p>{note.paragraph}</p>
            </div>
        ))}
    </div>
}

export default FooterOne;