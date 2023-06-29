export class Neuron {
  public output: number

  public inputs: number[]

  public error: number

  constructor(public weights: number[], public bias: number) {
    this.output = 0, this.error = 0, this.inputs = []
  }

  public calculateOutput(inputs: number[]): number {
    this.inputs = inputs
    let sum = inputs.reduce((total, input, index) => total + input * this.weights[index], 0)
    return this.output = this.activation(sum + this.bias)
  }

  public calculateError(target: number): void {
    this.error = target - this.output
  }

  public adjustWeights(learningRate: number): void {
    this.weights = this.weights.map((weight, index) => weight + learningRate * this.error * this.inputs[index])
    this.bias += learningRate * this.error
  }

  public activation(x: number): number {
    return x > 0 ? 1 : 0
  }

  public randomize(): void {
    this.bias = Math.random() * 2 - 1
    this.weights = this.weights.map(() => Math.random() * 2 - 1)
  }

  public get data() {
    return {...this}
  }
}
