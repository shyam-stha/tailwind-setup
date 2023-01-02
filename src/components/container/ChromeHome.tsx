import { FC, useState } from 'react'
import { HiOutlineViewGrid } from 'react-icons/hi'
import { HiPlus } from 'react-icons/hi'
import { IoMdMic } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'
import { useForm } from 'react-hook-form'
import google from '../../assets/google.png'

interface IAppDetails {
    wname: string
    url: string
    icon: string
}

const inputsItem = [
    {
        type: 'text',
        placeholder: 'Name Of Website',
        name: 'wname',
    },
    {
        type: 'text',
        placeholder: 'Url Of Website',
        name: 'url',
    },
    {
        type: 'text',
        placeholder: "Link Of Website's icons",
        name: 'icon',
    },
]

const ChromeHome: FC = () => {
    const [app, setApp] = useState<IAppDetails[]>([])
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data: any) => {
        if (data.name !== '' && data.icon !== '' && data.url !== '') {
            setApp(prev => [...prev, data])
            setIsOpen(false)
            reset()
        }
    }

    const addItemButton = (
        <div
            className='flex h-20 w-20 flex-col items-center justify-center justify-self-center hover:cursor-pointer hover:rounded-sm hover:bg-slate-500/40'
            onClick={() => setIsOpen(true)}>
            <div className='flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white shadow-sm shadow-fuchsia-700 active:translate-y-1'>
                <HiPlus size={20} />
            </div>
            <div className='pt-1 text-sm font-medium text-white'>Add Item</div>
        </div>
    )

    return (
        <div className='grid h-screen w-screen grid-cols-12 grid-rows-6 bg-[url("https://coolthemestores.com/wp-content/uploads/2020/11/black-dark-featured.jpg")] bg-cover bg-no-repeat'>
            <div className='col-span-full flex h-16 items-center justify-end gap-4 px-10'>
                <h2 className='text-sm text-white hover:cursor-pointer hover:underline'>
                    Gmail
                </h2>
                <h2 className='text-sm text-white hover:cursor-pointer hover:underline'>
                    Images
                </h2>
                <h2 className='hover:cursor-pointer'>
                    <HiOutlineViewGrid
                        size={25}
                        color='white'
                    />
                </h2>
                <h2 className='pl-5 hover:cursor-pointer'>
                    <RxAvatar
                        color='fuchsia'
                        size={30}
                    />
                </h2>
            </div>
            <div className='col-span-4 col-start-5 row-span-1 row-start-2 grid grid-cols-6'>
                <div className='col-start-2 col-end-6 flex items-center rounded-md bg-sky-900 '>
                    <a href='https://www.google.com/search?q=New+Year%27s+Day+2023&oi=ddle&ct=207425805&hl=en-GB&si=AEcPFx5y3cpWB8t3QIlw940Bbgd-HLN-aNYSTraERzz0WyAsdFtn6NUcNGIxUAvKfPb1jTWgxPqJ4MWKQbCYocn44PyrvwoS88alBUSpkMmZ_sDdliu1Dgwed-TIr-cpoTMX43kxi-GiELdL_zE9XMZQdCic-YeAX6WXbFq9Or7MnNOZyS7QBIQ%3D&source=doodle-ntp&ved=0ahUKEwjlrpTt9qX8AhXr-DgGHQvhD9oQPQgB'>
                        <img
                            src={google}
                            alt='Google'
                            className='h-40 w-full'
                        />
                    </a>
                </div>
            </div>
            <div className='col-span-6 col-start-4 row-start-3 row-end-5 px-20 pt-20'>
                <div className='flex items-center gap-3 rounded-full bg-white px-5 py-1  shadow-sm shadow-yellow-300'>
                    <AiOutlineSearch size={25} />
                    <input
                        type='text'
                        placeholder='Search Google or Type URL'
                        className='w-full bg-transparent py-2 focus:outline-none'
                    />
                    <IoMdMic size={25} />
                </div>
            </div>
            <div className='col-span-6 col-start-4 row-start-4 row-end-6 px-20 pt-10'>
                {app.length > 0 ? (
                    <div className='grid grid-cols-5 grid-rows-2 content-center'>
                        {app?.map(item => {
                            return (
                                <div className='flex h-20 w-20 flex-col items-center justify-center justify-self-center hover:cursor-pointer hover:rounded-sm hover:bg-slate-500/40'>
                                    <a
                                        href={item.url}
                                        className='flex flex-col items-center'>
                                        <div className='flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white '>
                                            <img
                                                src={item.icon}
                                                alt={item.wname}
                                                className='h-8'
                                            />
                                        </div>
                                        <div className='pt-1 text-sm font-medium text-white'>
                                            {item.wname}
                                        </div>
                                    </a>
                                </div>
                            )
                        })}

                        {app.length <= 10 ? addItemButton : ''}
                    </div>
                ) : (
                    addItemButton
                )}

                <div
                    className={`fixed inset-0 h-screen w-screen bg-slate-900/90 ${
                        isOpen ? 'visible' : 'invisible'
                    } `}>
                    <div className='flex h-full w-full items-center justify-center'>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className='flex h-64 w-1/4 flex-col justify-center  gap-2 rounded-md bg-white px-5  shadow-sm shadow-red-600'>
                            <h4>Add Shortcut </h4>
                            {inputsItem?.map(item => {
                                return (
                                    <>
                                        <input
                                            key={item.name}
                                            type={item.type}
                                            placeholder={item.placeholder}
                                            className=' rounded-sm p-2 text-black ring-1 ring-fuchsia-400 focus:outline-none'
                                            {...register(item.name)}
                                        />
                                    </>
                                )
                            })}

                            <div className='flex gap-4 self-end  pt-2'>
                                <button
                                    type='submit'
                                    className='w-20 rounded-md bg-blue-600 py-2 hover:bg-fuchsia-500 active:translate-y-1'>
                                    Add
                                </button>
                                <button
                                    className='w-20 rounded-md ring-1 ring-green-500 hover:ring-fuchsia-700 active:translate-y-1'
                                    onClick={() => setIsOpen(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChromeHome
