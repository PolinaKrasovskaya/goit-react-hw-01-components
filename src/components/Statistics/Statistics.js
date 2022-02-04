import PropTypes from 'prop-types';
import {
  SectionStatistics,
  Title,
  StatList,
  StatItem,
  ItemLabel,
  ItemPercenage,
} from './Statistics.styled'

export default function Statistics({ title, stats }) {
return (
  <SectionStatistics>
    {title && <Title>{title}</Title>}
    
    <StatList>
      {stats.map(({ id, label, percentage }) => (
      <StatItem key={id}>
        <ItemLabel>{label}</ItemLabel>
        <ItemPercenage>{percentage}%</ItemPercenage>
      </StatItem>
      ))}
    </StatList>
  </SectionStatistics>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
    })
  ),
};