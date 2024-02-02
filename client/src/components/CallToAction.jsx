import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about Competitive Programming?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with Useful Algorithms
            </p>
            <a href="https://cp-algorithms.com" target='_blank' rel='noopener noreferrer'>
                <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none w-full'>
                        CP Algorithms
                </Button>
            </a>
        </div>
        <div className="p-7 flex-1">
            <img src="https://www.c-sharpcorner.com/article/what-is-competitive-programming-and-why-it-is-importantcontests/Images/Top-10-Programming-Languages-to-Watch-Out-in-2019.png" />
        </div>
    </div>
  )
}