import React from 'react'
import styled from 'styled-components'
import { CountryOption } from '../../shared/tourFilters'

const StyledCountryFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 1rem 0 0;
`

const StyledCountryChip = styled.button<{ $active: boolean }>`
  min-height: 2.5rem;
  padding: 0.55rem 1rem;
  border: 1px solid ${({ $active }) => ($active ? '#a33b2f' : '#d8d5ca')};
  border-radius: 999px;
  background: ${({ $active }) => ($active ? '#a33b2f' : 'transparent')};
  color: ${({ $active }) => ($active ? '#fff' : '#45463f')};
  cursor: pointer;
  font: inherit;
  font-size: 0.78rem;
  transition: background-color 160ms ease, color 160ms ease, border-color 160ms ease;

  &:hover {
    border-color: #a33b2f;
  }

  &:focus-visible {
    outline: 2px solid #33342d;
    outline-offset: 3px;
  }
`

interface CountryFilterProps {
  countries: CountryOption[]
  selectedCountries: string[]
  onToggle: (country: string) => void
  allCountriesLabel?: string
  onSelectAll?: () => void
}

const CountryFilter: React.FC<CountryFilterProps> = ({
  countries,
  selectedCountries,
  onToggle,
  allCountriesLabel,
  onSelectAll,
}) => (
  <StyledCountryFilters>
    {onSelectAll && allCountriesLabel && (
      <StyledCountryChip
        type='button'
        $active={selectedCountries.length === 0}
        aria-pressed={selectedCountries.length === 0}
        onClick={onSelectAll}
      >
        {allCountriesLabel}
      </StyledCountryChip>
    )}
    {countries.map(({ code, label }) => {
      const isActive = selectedCountries.includes(code)
      return (
        <StyledCountryChip
          key={code}
          type='button'
          $active={isActive}
          aria-pressed={isActive}
          onClick={() => onToggle(code)}
        >
          {label}
        </StyledCountryChip>
      )
    })}
  </StyledCountryFilters>
)

export default CountryFilter
