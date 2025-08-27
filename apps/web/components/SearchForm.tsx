import { FunctionComponent } from 'react'
import { SidebarGroup, SidebarGroupContent, SidebarInput } from './ui/sidebar'
import { Label } from './ui/label'
import { Search } from 'lucide-react'

const SearchForm: FunctionComponent = ({ ...props }) => {
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search chat"
            className="pl-8"
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  )
}
export default SearchForm
