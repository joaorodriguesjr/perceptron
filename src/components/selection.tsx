import styles from './selection.module.css'

interface Props {
  data: { inputs: number[]; target: number }[]
  onDataSelection: (index: number) => void
  onCompare: (index: number) => boolean
  onPredict: (inputs: number[]) => number
}

export function DataSelection({ data, onDataSelection, onCompare, onPredict }: Props): JSX.Element {
  const rows = data.map((row, index) => {
    const expected = onPredict(row.inputs) === row.target

    return (
      <tr key={index} onClick={() => onDataSelection(index)} className={onCompare(index) ? styles.selected : undefined}>
        <td>{row.inputs[0]}</td>
        <td>{row.inputs[1]}</td>
        <td>{row.target}</td>
        <td className={expected ? styles.expected : undefined}>{expected ? '✓' : '×'}</td>
      </tr>
    )
  })

  return (
    <table className={styles.table}>
      <tbody>{rows}</tbody>
    </table>
  )
}
