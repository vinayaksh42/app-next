import {
	withKnobs,
	text,
	boolean,
	number,
	optionsKnob as options,
	color
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Vue from 'vue';
import VCheckbox from '../v-checkbox';
import markdown from './v-checkbox.readme.md';
import withPadding from '../../../.storybook/decorators/with-padding';

Vue.component('v-checkbox', VCheckbox);

export default {
	title: 'Components / Checkbox',
	component: VCheckbox,
	decorators: [withKnobs, withPadding],
	parameters: {
		notes: markdown
	}
};

export const booleanState = () => ({
	methods: {
		onChange: action('change')
	},
	data() {
		return {
			checked: false
		};
	},
	template: `
	<div>
		<v-checkbox v-model="checked" @change="onChange" />
		<pre style="max-width: max-content; margin-top: 20px; background-color: #eee; font-family: monospace; padding: 0.5rem; border-radius: 8px;">{{checked}}</pre>
	</div>
	`
});

export const arrayState = () => ({
	methods: {
		onChange: action('change')
	},
	data() {
		return {
			options: ['html', 'css']
		};
	},
	template: `
	<div>
		<v-checkbox v-model="options" value="html" @change="onChange" label="HTML" />
		<v-checkbox v-model="options" value="css" @change="onChange" label="CSS" />
		<v-checkbox v-model="options" value="js" @change="onChange" label="JS" />
		<pre style="max-width: max-content; margin-top: 20px; background-color: #eee; font-family: monospace; padding: 0.5rem; border-radius: 8px;">{{options}}</pre>
	</div>
	`
});

export const disabled = () =>
	`<div><v-checkbox label="Disabled" disabled /><v-checkbox :inputValue="true" label="Disabled" disabled /></div>`;

export const indeterminate = () => ({
	data() {
		return {
			indeterminate: true,
			value: null
		};
	},
	template: `<div>
	<v-checkbox label="Indeterminate" v-model="value" :indeterminate.sync="indeterminate" />
	<pre style="max-width: max-content; margin-top: 20px; background-color: #eee; font-family: monospace; padding: 0.5rem; border-radius: 8px;">
indeterminate: {{indeterminate}}
value: {{value}}
</pre>
	</div>`
});

export const colors = () => ({
	methods: {
		onChange: action('change')
	},
	data() {
		return {
			options: ['red', 'yellow', 'custom']
		};
	},
	props: {
		customColor: {
			default: color('Custom color', '#4CAF50')
		}
	},
	template: `
	<div>
		<v-checkbox v-model="options" value="red" @change="onChange" :style="{'--v-checkbox-color': 'var(--red)'}" label="Red" />
		<v-checkbox v-model="options" value="blue" @change="onChange" :style="{'--v-checkbox-color': 'var(--blue)'}" label="Blue" />
		<v-checkbox v-model="options" value="yellow" @change="onChange" :style="{'--v-checkbox-color': 'var(--amber)'}" label="Yellow" />
		<v-checkbox v-model="options" value="custom" @change="onChange" :style="{'--v-checkbox-color': customColor}" label="Custom..." />
	</div>
	`
});

export const htmlLabel = () => ({
	methods: {
		onChange: action('change')
	},
	data() {
		return {
			checked: true
		};
	},
	template: `
		<v-checkbox v-model="checked" @change="onChange">
			<template #label>
				Any <i>custom</i> markup in here
			</template>
		</v-checkbox>
	`
});