import Image from 'next/image'
import { Inter } from 'next/font/google'
import { CopyBlock,dracula } from "react-code-blocks";
import { Mermaid } from 'mdx-mermaid/Mermaid';

const inter = Inter({ subsets: ['latin'] })


const data = {
  "code": "class Car:\n    def __init__(self, brand, model, year):\n        self.brand = brand\n        self.model = model\n        self.year = year\n        \n    def display_info(self):\n        print(\"Brand:\", self.brand)\n        print(\"Model:\", self.model)\n        print(\"Year:\", self.year)\n        \n\nclass Hyundai(Car):\n    def __init__(self, brand, model, year, color):\n        super().__init__(brand, model, year)\n        self.color = color\n        \n    def display_info(self):\n        super().display_info()\n        print(\"Color:\", self.color)\n        \n\ncar1 = Car(\"Toyota\", \"Camry\", 2020)\ncar1.display_info()\n\ncar2 = Hyundai(\"Hyundai\", \"Elantra\", 2019, \"Blue\")\ncar2.display_info()",
  "language": "Python"
}
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      
      <CopyBlock
    text={data.code}
    language={data.language}
    showLineNumbers={true}
    theme={dracula}
    
    
  />

<Mermaid chart={`mermaid
graph LR
A[Car] --> B[Hyundai]
A --> C[display_info()]
B --> D[display_info()]
B --> E[color]
A --> F[brand]
A --> G[model]
A --> H[year]
`} />
    </main>
  )
}
