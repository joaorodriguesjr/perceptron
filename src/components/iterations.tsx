import styles from './iterations.module.css'

interface Props {
  currentCount: number
  onCountSelection: (iterations: number) => void
}

export function Iterations({ currentCount, onCountSelection }: Props): JSX.Element {
  const selectionCheck = (value: number) => {
    return value === currentCount ? styles.selected : undefined
  }

  const options = [1, 10, 100, 1000].map((value, index) => (
    <div key={index} className={selectionCheck(value)} onClick={() => onCountSelection(value)}>
      {value}×
    </div>
  ))

  return <div className={styles.iterations}>{options}</div>
}
