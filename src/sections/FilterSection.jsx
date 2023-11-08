import React from 'react'
import './FilterSection.css'
import DateFilter from '../components/DateFilter'
import FilterButton from '../components/FilterButton'
import ExportButton from '../components/ExportButton'

function FilterSection() {
  return (
    <>
      <div className='filter-section'>
        <div className="filters">
          <DateFilter />
          <FilterButton />
        </div>
  
        <ExportButton />
  
      </div>
      <div className="horizontal__line"></div>

    </>
  )
}

export default FilterSection
