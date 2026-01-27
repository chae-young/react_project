import StepLayout from "../components/StepLayout";
import FormProvider from "../context/FormContext";

export default function SignupPage() {

    // 5층: 배달 시작
    return (
        <FormProvider>
            [2단계: 개인정보 입력]
            <StepLayout />
        </FormProvider>
    );
  }
  