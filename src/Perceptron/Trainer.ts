import { Neuron } from './Neuron'

function * loop(times: number) {
  for (let index = 0; index < times; index++) yield index
}

export class Trainer {
  public learningRate: number

  constructor(public neuron: Neuron) {
    this.learningRate = 0.005
  }

  public train(data: {inputs: number[], target: number}[], iterations: number) {
    this.neuron.randomize()

    for (let _iteration of loop(iterations)) {
      data.forEach((data) => {
        const {inputs,  target} = data

        this.neuron.calculateOutput(inputs)
        this.neuron.calculateError(target)

        this.neuron.adjustWeights(this.learningRate)
      })
    }
  }

  public static create(): Trainer {
    return new Trainer(new Neuron([0, 0], 0))
  }
}
