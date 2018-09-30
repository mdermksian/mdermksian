import Typography from "typography";
import gray from 'gray-percentage';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
//import kirkhamTheme from "typography-theme-kirkham"

const typography = new Typography({
	title: 'mdermksian',
	baseFontSize: '18px',
	googleFonts: [
		{
			name: 'Raleway',
			styles: ['500']
		},
		{
			name: 'EB Garamond',
			styles: ['400']
		}
	],
	headerFontFamily: ['Raleway', 'sans-serif'],
	bodyFontFamily: ['EB Garamond', 'serif'],
	headerGray: 10,
	overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
		a: {
			color: 'rgba(0, 0, 0, 0.8)',
			textDecoration: 'none',
		},
		'a:hover,a:active': {
			color: '#e32',
		},
		blockquote: {
 			...scale(1 / 5),
 			background: gray(97),
 			color: gray(31),
 			paddingLeft: rhythm(14 / 16),
 			paddingRight: rhythm(1 / 2),
 			paddingTop: rhythm(1 / 2),
 			paddingBottom: rhythm(1 / 2),
 			marginLeft: 0,
			marginRight: 0,
 			borderLeft: `${rhythm(2 / 16)} solid ${gray(80)}`,
		},
		'blockquote > :last-child': {
			marginBottom: 0,
		},
		'blockquote cite': {
		 ...adjustFontSizeTo(options.baseFontSize),
		color: options.bodyColor,
		fontWeight: options.bodyWeight,
		},
		'blockquote cite:before': {
			content: '"— "',
		},
		ul: {
			listStyle: 'disc',
		},
		[MOBILE_MEDIA_QUERY]: {
			'ul,ol': {
				marginLeft: rhythm(1),
			},
			blockquote: {
				marginLeft: rhythm(-3 / 4),
				marginRight: rhythm(-3 / 4),
				paddingLeft: rhythm(11 / 16),
				paddingRight: rhythm(3 / 4),
			},
		},
		'h1,h2,h3,h4,h5,h6': {
			marginTop: rhythm(2),
		},
		h6: {
			fontStyle: 'italic',
		}
	})
});

export default typography;
export const rhythm = typography.rhythm;