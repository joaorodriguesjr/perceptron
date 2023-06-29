import { Bayon } from 'next/font/google'
import styles from './neuron.module.css'

const bayon = Bayon({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bayon',
})

interface Props {
  target: number
  prediction: number
  inputs: number[]
  weights: number[]
  bias: number
}

export function Neuron({ target, prediction, inputs, weights, bias }: Props): JSX.Element {
  return (
    <div className={[bayon.variable, styles.neuron].join(' ')}>
      <svg viewBox="0 0 360 620" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text fill="white" x="32%" y="150" textAnchor="middle" fontSize={96}>
          {inputs[0]}
        </text>
        <text fill="white" x="68%" y="150" textAnchor="middle" fontSize={96}>
          {inputs[1]}
        </text>
        <text fill="white" x="50%" y="610" textAnchor="middle" fontSize={96}>
          {prediction}
        </text>
        <text fill="white" x="18%" y="210" textAnchor="middle" fontSize={24}>
          {weights[0].toFixed(3)}
        </text>
        <text fill="white" x="74%" y="210" fontSize={24}>
          {weights[1].toFixed(3)}
        </text>
        <text fill="white" x="85%" y="320" textAnchor="middle" fontSize={24}>
          {bias.toFixed(3)}
        </text>
        <path
          d="M307 361V361.5H307.5V361H307ZM272 361L277 363.887V358.113L272 361ZM306.5 336V361H307.5V336H306.5ZM307 360.5H276.5V361.5H307V360.5Z"
          fill="white"
        />
        <circle cx="180" cy="363.5" r="73" stroke="white" strokeWidth="6" />
        <path d="M180 516.5L182.887 511.5H177.113L180 516.5ZM179.5 481.5V512H180.5V481.5H179.5Z" fill="white" />
        <path d="M170 464.5H180.505V454.5H190" stroke="white" strokeWidth="3" />
        <path
          d="M166.605 381V376.856L179.821 360.336L167.165 345.216V341.016H193.653V345.496H179.261C178.439 345.496 177.431 345.496 176.237 345.496C175.079 345.496 174.202 345.477 173.605 345.44L185.085 359.048V360.56L172.373 376.52C173.791 376.52 175.154 376.52 176.461 376.52C177.805 376.483 179.223 376.464 180.717 376.464H194.325V381H166.605Z"
          fill="white"
        />
        <path
          d="M243 219.5L243.398 219.803L243.5 219.669V219.5H243ZM198 278.5L203.328 276.275L198.737 272.774L198 278.5ZM116 219.5H115.5V219.669L115.602 219.803L116 219.5ZM161 278.5L160.263 272.774L155.672 276.275L161 278.5ZM242.5 175.5V219.5H243.5V175.5H242.5ZM242.602 219.197L200.331 274.619L201.127 275.225L243.398 219.803L242.602 219.197ZM115.5 175.5V219.5H116.5V175.5H115.5ZM115.602 219.803L157.873 275.225L158.669 274.619L116.398 219.197L115.602 219.803Z"
          fill="white"
        />
        <g filter="url(#filter0_f_50_94)">
          <ellipse cx="180" cy="348.5" rx="16" ry="100" fill={prediction === target ? '#278C31' : '#e74c3c'} />
        </g>
        <defs>
          <filter
            id="filter0_f_50_94"
            x="-43"
            y="0"
            width="446"
            height="697"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_50_94" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
