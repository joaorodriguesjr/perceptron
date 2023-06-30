'use client'

import styles from './page.module.css'
import { useState } from 'react'
import { usePerceptron } from '@/hooks/perceptron'
import { Iterations } from '@/components/iterations'
import { Neuron } from '@/components/neuron'
import { DataSelection } from '@/components/selection'

const data = [
  { inputs: [0, 0], target: 0 },
  { inputs: [1, 1], target: 1 },
  { inputs: [1, 0], target: 1 },
  { inputs: [0, 1], target: 1 },
]

export default function Home() {
  const [current, setCurrent] = useState(data[0])
  const [iterations, updateIterations] = useState(10)
  const { neuron, predict, train, clear, compare } = usePerceptron()

  const prediction = predict(current.inputs)

  return (
    <main className={styles.main}>
      <DataSelection
        data={data}
        onDataSelection={(index) => setCurrent(data[index])}
        onCompare={(index) => compare(current, data[index])}
        onPredict={(inputs) => predict(inputs)}
      />

      <Neuron
        target={current.target}
        prediction={prediction}
        inputs={current.inputs}
        weights={neuron.weights}
        bias={neuron.bias}
      />

      <section className={styles.controls}>
        <Iterations currentCount={iterations} onCountSelection={updateIterations} />
        <div className={styles.actions}>
          <button onClick={() => clear()}>Forget</button>
          <button onClick={() => train(data, iterations)}>Train</button>
        </div>
      </section>
    </main>
  )
}
