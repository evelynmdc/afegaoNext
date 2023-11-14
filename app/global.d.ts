type TAppProps = { id: string; title: string };
interface IBreedImages {
  datBegin: string;
  datUpdate: string | null;
  id: number;
  image: { src: string; title: string };
  indAtivo: boolean;
  pthPhoto: string;
}
