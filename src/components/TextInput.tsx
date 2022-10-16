import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
    children: ReactNode,
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className={'flex h-12 items-center gap-3 py-4 px-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-300'} >
            {props.children}
        </div>
    )
}
TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children: ReactNode,
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className={'h-6 w-6 text-gray-400'}>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string
}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input className='bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400'
            {...props}>
        </input>
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}