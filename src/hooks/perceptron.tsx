import { Trainer } from '@/Perceptron/Trainer'
import { useCallback, useState } from 'react'

export type InputData = {
  inputs: number[]
  target: number
}

const trainer = Trainer.create()

export function usePerceptron() {
  const [_moment, update] = useState(Date.now())

  const predict = useCallback((inputs: number[]): number => {
    return trainer.neuron.calculateOutput(inputs)
  }, [])

  const train = useCallback((data: InputData[], epochs: number) => {
    trainer.train(data, epochs)
    update(Date.now())
  }, [])

  const clear = useCallback(() => {
    trainer.neuron.clear()
    update(Date.now())
  }, [])

  const compare = useCallback((a: InputData, b: InputData) => {
    return a.inputs[0] === b.inputs[0] && a.inputs[1] === b.inputs[1] && a.target === b.target
  }, [])

  return { neuron: { ...trainer.neuron.data }, predict, train, clear, compare }
}
