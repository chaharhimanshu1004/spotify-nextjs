import Image from "next/image";
import Header from "@/components/Header"
import ListItem from "@/components/ListItem";
export default function Home() {
  return (
    <div className="bg-neutral-900 h-full rounded-lg w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
          <div className="grid gird-cols-1 sm-grid-cols-2 xl-grod-cols-3 gap-4 mt-4">
            <ListItem image="/images/liked.png" name="Liked Songs" href="liked"></ListItem>
          </div>
        </div>
        


      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest songs</h1>
        </div>
        <div>List of Songs!</div>
      </div>
      
     

    
    </div>

    
  )
}
