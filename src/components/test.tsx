/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6EdJyHZj5RD
 */
import { Input } from "src/components/ui/input"
import { Button } from "@/components/ui/button"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"

export default function Component() {
  return (
    <div key="1" className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-4 py-2 border-b">
        <h1 className="text-2xl font-bold">Daily Menus</h1>
        <div className="flex items-center gap-2">
          <Input className="w-64" placeholder="Search restaurants..." type="search" />
          <div className="border rounded-lg p-2">
            <h2 className="font-semibold mb-2">Sort by</h2>
            <ul>
              <li className="py-1">Name</li>
              <li className="py-1">Location</li>
            </ul>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-4">
        <div className="grid gap-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-bold">Restaurant A</h2>
            <p className="text-gray-500">123 Main St, City, State</p>
          </div>
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-bold">Restaurant B</h2>
            <p className="text-gray-500">456 Second Ave, City, State</p>
            <Collapsible className="mt-4">
              <CollapsibleTrigger className="flex items-center justify-between">
                <span>Daily Menu</span>
                <Button size="icon" variant="ghost">
                  <ChevronDownIcon className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="grid gap-2 mt-2">
                  <div>
                    <h3 className="font-semibold">Dish 1</h3>
                    <p className="text-sm text-gray-500">Description of Dish 1</p>
                    <p className="font-semibold">$10.99</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Dish 2</h3>
                    <p className="text-sm text-gray-500">Description of Dish 2</p>
                    <p className="font-semibold">$12.99</p>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </main>
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
