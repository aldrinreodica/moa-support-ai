import { FunctionComponent } from 'react'
import { IoCreateOutline } from 'react-icons/io5'

// Components
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '../ui/sidebar'
import SearchForm from '../SearchForm'

// Mock data (display the chats here)
const data = {
  navMain: [
    {
      title: 'Getting Started',
      url: '#',
      items: [
        {
          title: 'Choose a buddy',
          url: '#',
        },
        {
          title: 'Preferences',
          url: '#',
        },
      ],
    },
    {
      title: 'Chats',
      url: '#',
      items: [
        {
          title: 'Routing',
          url: '#',
        },
        {
          title: 'Data Fetching',
          url: '#',
          isActive: true,
        },
        {
          title: 'Rendering',
          url: '#',
        },
        {
          title: 'Caching',
          url: '#',
        },
        {
          title: 'Styling',
          url: '#',
        },
        {
          title: 'Optimizing',
          url: '#',
        },
        {
          title: 'Configuring',
          url: '#',
        },
        {
          title: 'Testing',
          url: '#',
        },
        {
          title: 'Authentication',
          url: '#',
        },
        {
          title: 'Deploying',
          url: '#',
        },
        {
          title: 'Upgrading',
          url: '#',
        },
        {
          title: 'Examples',
          url: '#',
        },
      ],
    },
  ],
}

const AppSidebar: FunctionComponent = ({ ...props }) => {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <h1 className="font-bold text-black/50">MOA</h1>
        <div className="flex flex-col gap-4">
          <div className="m-2 flex cursor-pointer flex-row items-center gap-2 p-2 hover:rounded-sm hover:bg-black/10">
            <IoCreateOutline size={20} className="text-black" />
            <span className="text-sm font-[400]">New Chat</span>
          </div>
        </div>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((chats) => (
          <SidebarGroup key={chats.title}>
            <SidebarGroupLabel>{chats.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {chats.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url} title={item.title}>
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
export default AppSidebar
