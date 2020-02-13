import {
	withKnobs,
	text,
	boolean,
	number,
	color,
	optionsKnob as options
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Vue from 'vue';
import VButton from './v-button.vue';
import VIcon from '../v-icon/';
import markdown from './v-button.readme.md';
import withPadding from '../../../.storybook/decorators/with-padding';

Vue.component('v-button', VButton);
Vue.component('v-icon', VIcon);

export default {
	title: 'Components / Button',
	component: VButton,
	decorators: [withKnobs, withPadding],
	parameters: {
		notes: markdown
	}
};

export const withText = () => ({
	methods: { onClick: action('click') },
	props: {
		text: {
			default: text('Text in button', 'Click me')
		},
		block: {
			default: boolean('Block', false, 'Button')
		},
		rounded: {
			default: boolean('Rounded', false, 'Button')
		},
		icon: {
			default: boolean('Icon mode', false, 'Button')
		},
		outlined: {
			default: boolean('Outlined', false, 'Button')
		},
		type: {
			default: text('Type attribute', 'button', 'Button')
		},
		loading: {
			default: boolean('Loading', false, 'Button')
		},
		width: {
			default: number('Width', 0, {}, 'Button')
		},
		size: {
			default: options(
				'Size',
				{
					'Extra Small': 'xSmall',
					Small: 'small',
					'(default)': 'default',
					Large: 'large',
					'Extra Large': 'xLarge'
				},
				'default',
				{
					display: 'select'
				},
				'Button'
			)
		},
		disabled: {
			default: boolean('Disabled', false, 'Button')
		},
		color: {
			default: color('Color', '#ffffff', 'Colors')
		},
		backgroundColor: {
			default: color('Background Color', '#263238', 'Colors')
		},
		hoverColor: {
			default: color('Color (hover)', '#ffffff', 'Colors')
		},
		hoverBackgroundColor: {
			default: color('Background Color (hover)', '#37474f', 'Colors')
		}
	},
	template: `
		<v-button
			:block="block"
			:rounded="rounded"
			:outlined="outlined"
			:icon="icon"
			:style="{
				'--v-button-color': color,
				'--v-button-background-color': backgroundColor,
				'--v-button-hover-color': hoverColor,
				'--v-button-hover-background-color': hoverBackgroundColor
			}"
			:type="type"
			:disabled="disabled"
			:loading="loading"
			:width="width"
			:x-small="size === 'xSmall'"
			:small="size === 'small'"
			:large="size === 'large'"
			:x-large="size === 'xLarge'"
			@click="onClick"
		>
			{{ text }}
		</v-button>
	`
});

export const withIcon = () => ({
	methods: { onClick: action('click') },
	props: {
		iconName: {
			default: text('Material Icon', 'add')
		},
		block: {
			default: boolean('Block', false, 'Button')
		},
		rounded: {
			default: boolean('Rounded', true, 'Button')
		},
		icon: {
			default: boolean('Icon mode', true, 'Button')
		},
		outlined: {
			default: boolean('Outlined', false, 'Button')
		},
		type: {
			default: text('Type attribute', 'button', 'Button')
		},
		loading: {
			default: boolean('Loading', false, 'Button')
		},
		width: {
			default: number('Width', 0, {}, 'Button')
		},
		size: {
			default: options(
				'Size',
				{
					'Extra Small': 'xSmall',
					Small: 'small',
					'(default)': 'default',
					Large: 'large',
					'Extra Large': 'xLarge'
				},
				'default',
				{
					display: 'select'
				},
				'Button'
			)
		},
		iconSize: {
			default: options(
				'Size (Icon)',
				{
					'Extra Small': 'xSmall',
					Small: 'small',
					'(default)': 'default',
					Large: 'large',
					'Extra Large': 'xLarge'
				},
				'default',
				{
					display: 'select'
				},
				'Button'
			)
		},
		disabled: {
			default: boolean('Disabled', false, 'Button')
		},
		color: {
			default: color('Color', '#ffffff', 'Colors')
		},
		backgroundColor: {
			default: color('Background Color', '#263238', 'Colors')
		},
		hoverColor: {
			default: color('Color (hover)', '#ffffff', 'Colors')
		},
		hoverBackgroundColor: {
			default: color('Background Color (hover)', '#37474f', 'Colors')
		}
	},
	template: `
		<v-button
			:block="block"
			:rounded="rounded"
			:outlined="outlined"
			:icon="icon"
			:style="{
				'--v-button-color': color,
				'--v-button-background-color': backgroundColor,
				'--v-button-hover-color': hoverColor,
				'--v-button-hover-background-color': hoverBackgroundColor
			}"
			:type="type"
			:disabled="disabled"
			:loading="loading"
			:width="width"
			:x-small="size === 'xSmall'"
			:small="size === 'small'"
			:large="size === 'large'"
			:x-large="size === 'xLarge'"
			@click="onClick"
		>
			<v-icon
				:name="iconName"
				:x-small="iconSize === 'xSmall'"
				:small="iconSize === 'small'"
				:large="iconSize === 'large'"
				:x-large="iconSize === 'xLarge'"
				style="--v-icon-color: var(--white)"
			/>
		</v-button>
	`
});

export const sizes = () => `
<div>
	<v-button x-small>Extra small</v-button>
	<v-button small>Small</v-button>
	<v-button>Default</v-button>
	<v-button large>Large</v-button>
	<v-button x-large>Extra Large</v-button>
</div>
`;

export const colors = () => `
<div>
	<v-button
		:style="{
			'--v-button-color': 'var(--red)',
			'--v-button-background-color': 'var(--red-50)',
			'--v-button-hover-color': 'var(--white)',
			'--v-button-hover-background-color': 'var(--red)'
		}"
	>
		Delete
	</v-button>
	<v-button
		:style="{
			'--v-button-color': 'var(--white)',
			'--v-button-background-color': 'var(--green)',
			'--v-button-hover-color': 'var(--white)',
			'--v-button-hover-background-color': 'var(--green-800)'
		}"
	>
		Save
	</v-button>
	<v-button
		:style="{
			'--v-button-color': 'var(--white)',
			'--v-button-background-color': 'var(--amber)',
			'--v-button-hover-color': 'var(--white)',
			'--v-button-hover-background-color': 'var(--amber-800)'
		}"
	>
		Warn
	</v-button>
	<v-button
		:style="{
			'--v-button-color': 'var(--blue-grey-800)',
			'--v-button-background-color': 'var(--blue-grey-50)',
			'--v-button-hover-color': 'var(--red)',
			'--v-button-hover-background-color': 'var(--white)'
		}"
	>
		Hover
	</v-button>
	<v-button
		:style="{
			'--v-button-color': 'var(--blue-grey-800)',
			'--v-button-background-color': 'transparent',
			'--v-button-hover-color': 'var(--black)',
			'--v-button-hover-background-color': 'var(--blue-grey-100)'
		}"
	>
		Transparent
	</v-button>
</div>
`;

export const customLoading = () => ({
	props: {
		loading: {
			default: boolean('Loading', true)
		}
	},
	template: `
	<v-button :loading="loading">
		Hello, World!
		<template #loading>
			..Loading..
		</template>
	</v-button>`
});