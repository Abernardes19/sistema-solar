export default function Title(props: { headline: string }) {
  return (
    <h2 className=" text-white flex items-center justify-center text-xl pb-[20px] pt-[40px]">{ props.headline }</h2>
  )
}