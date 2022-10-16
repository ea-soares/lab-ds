import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Loren ipsum.',
    },
    argTypes: {
        size: {
            options: ['sm','md','lg'],
            control: {
                type: 'inline-radio',
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
    args: {
        size: 'md',
    }
}
export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm',
    }
}
export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg',
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        size: 'lg',
        asChild: true, 
        children: (
            <p>Custom Component Heading</p>
        )
    },
}