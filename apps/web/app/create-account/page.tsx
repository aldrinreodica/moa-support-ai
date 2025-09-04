import { FunctionComponent } from 'react'

// Components
import SignUpForm from '@/components/SignUpForm'

const SignUp: FunctionComponent = () => {
  return (
    <div className="relative flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <h1 className="pointer-events-none absolute top-[50px] left-[50px] text-2xl font-bold">
          MOA
        </h1>
        <SignUpForm />
      </div>
    </div>
  )
}
export default SignUp
