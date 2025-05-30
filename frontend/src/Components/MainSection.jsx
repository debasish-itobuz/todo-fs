import Card from '../Components/Card'

export default function MainSection({ todo }) {

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col justify-center items-center gap-6'>
                {
                    todo.map((item, index) => {
                        return <Card key={index} title={item.title} id={item._id} />
                    })
                }

            </div>

        </div>
    )
}
