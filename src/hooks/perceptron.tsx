import { Trainer } from '@/Perceptron/Trainer'
import { useCallback, useState } from 'react'

export type Data = {
  inputs: number[]
  target: number
}

const trainer = Trainer.create()

export function usePerceptron() {
  const [_moment, update] = useState(Date.now())

  const predict = useCallback((inputs: number[]): number => {
    return trainer.neuron.calculateOutput(inputs)
  }, [])

  const train = useCallback((data: Data[], epochs: number) => {
    trainer.train(data, epochs)
    update(Date.now())
  }, [])

  const clear = useCallback(() => {
    trainer.neuron.clear()
    update(Date.now())
  }, [])

  const compare = useCallback((a: Data, b: Data) => {
    return a.inputs.every((input, index) => input === b.inputs[index]) && a.target === b.target
  }, [])

  return { neuron: { ...trainer.neuron.data }, predict, train, clear, compare }
}
