import React from 'react'

function Card({username="SD",role="Not assigned yet"}) {
    return (
        <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/7775641/pexels-photo-7775641.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                alt="" width="384" height="512"/>
                <div className="pt-6 space-y-4">
                    <blockquote>
                    <p className="text-lg font-medium">
                        “Tailwind CSS is the only framework that I've seen scale
                        on large teams. It’s easy to customize, adapts to any design,
                        and the build size is tiny.”
                    </p>
                    </blockquote>
                    <figcaption className="font-medium">
                    <div className="text-50">
                        {username}
                    </div>
                    <div className='text-70'>
                        {role}
                    </div>
                    </figcaption>
                </div>
                </figure>
        </div>
    )
}

export default Card;