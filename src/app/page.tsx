"use client";

// import HouseDrawing from "@/components/draw";
import HTMLContent from "@/components/htmlcontent";
import Parallax from "@/components/parallax";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const MotionLink = motion(Link);

export default function Home() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between m-2">
        <Image className="" src="/assets/image1.jpg" alt="Gambar 1" width={40} height={40} />
        <div className="flex flex-row gap-6">
          <MotionLink href="#" whileHover={{ scale: 1.1, color: "#2BB95D", rotate: 5 }} whileTap={{ scale: 0.9, color: "#1A7A3E", backgroundColor: "#2BB95D" }} className="text-sm font-medium px-3 py-1 rounded-full">
            Home
          </MotionLink>
          <MotionLink href="#" whileHover={{ scale: 1.1, color: "#2BB95D", rotate: -5 }} whileTap={{ scale: 0.9, color: "#1A7A3E", backgroundColor: "#2BB95D" }} className="text-sm font-medium px-3 py-1 rounded-full">
            About
          </MotionLink>
          <MotionLink href="#" whileHover={{ scale: 1.1, color: "#2BB95D", rotate: 5 }} whileTap={{ scale: 0.9, color: "#1A7A3E", backgroundColor: "#2BB95D" }} className="text-sm font-medium px-3 py-1 rounded-full">
            Product
          </MotionLink>
          <MotionLink href="#" whileHover={{ scale: 1.1, color: "#2BB95D", rotate: -5 }} whileTap={{ scale: 0.9, color: "#1A7A3E", backgroundColor: "#2BB95D" }} className="text-sm font-medium px-3 py-1 rounded-full">
            Projects
          </MotionLink>
        </div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95, backgroundColor: "rgba(3, 58, 41, 0.33)" }} className="flex items-center justify-center rounded-4xl bg-[green] text-[white] p-1 gap-2 transition">
          <Phone className="size-4 " />
          Buy Now
        </motion.div>
      </div>

      <div className=" flex items-start relative py-40 mb-10">
        <div>
          <Image className="object-cover w-full h-full  " src="/assets/image2.jpg" alt="Gambar 2" fill />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 flex flex-col items-start text-white h-full p-5">
          <h1 className="text-4xl font-bold mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <h4 className="text-xl mb-4 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h4>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95, boxShadow: "0 0 90px 70px rgba(223, 255, 200, 0.8)" }}
            className="flex items-center justify-center rounded-4xl w-50 bg-[green] text-[white] p-1 gap-2 transition my-2"
          >
            <Phone className="size-4 " />
            Buy Now
          </motion.div>
          <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.85, boxShadow: "0 0 30px 20px rgba(0, 0, 0, 0.8)" }} className="flex items-center justify-center rounded-4xl w-50 bg-[white] text-[green] p-1 gap-2 transition">
            <Phone className="size-4 " />
            Learn more
          </motion.div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-3 items-center gap-10 m-10 py-24">
          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, type: "spring" }} viewport={{ once: true, amount: 0.3 }} className="col-span-1 flex justify-center mt-40">
            <Image className="rounded-xl object-cover" src="/assets/image1.jpg" alt="Gambar 1" width={250} height={250} />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2, type: "spring" }} viewport={{ once: true, amount: 0.4 }} className="col-span-2 flex flex-col gap-4">
            <h2 className="text-2xl font-bold">About Us</h2>
            <p className="text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate deserunt mollit anim id est laborum.
            </p>
            <HTMLContent />
          </motion.div>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center pb-30">
        <h2 className="text-2xl font-bold mb-6">Product</h2>
        <div className="grid grid-cols-3 gap-30 ">
          <motion.div initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5, type: "spring" }} viewport={{ once: true, amount: 0.3 }}>
            <Card className="w-[350px]">
              <CardHeader>
                <motion.div initial={{ opacity: 0, rotate: 180 }} whileInView={{ opacity: 1, rotate: 0 }} transition={{ duration: 0.8, type: "spring" }} viewport={{ once: true, amount: 0.5 }} className="col-span-1 flex justify-center">
                  <Image className="rounded-xl object-cover" src="/assets/image1.jpg" alt="Gambar 1" width={300} height={300} />
                </motion.div>
                <CardTitle>My Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95, boxShadow: "0 0 90px 70px rgba(255, 255, 255, 1)" }}
                  className="flex items-center justify-center rounded-4xl w-50 bg-[green] text-[white] p-1 gap-2 transition my-4"
                >
                  <Phone className="size-4 " />
                  Buy Now
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 3.5, type: "spring" }} viewport={{ once: true, amount: 0.3 }}>
            <Card className="w-[350px]">
              <CardHeader>
                <motion.div initial={{ opacity: 0, rotate: 180 }} whileInView={{ opacity: 1, rotate: 0 }} transition={{ duration: 2, type: "spring" }} viewport={{ once: true, amount: 0.5 }} className="col-span-1 flex justify-center">
                  <Image className="rounded-xl object-cover" src="/assets/image1.jpg" alt="Gambar 1" width={300} height={300} />
                </motion.div>
                <CardTitle>My Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95, boxShadow: "0 0 90px 70px rgba(255, 255, 255, 1)" }}
                  className="flex items-center justify-center rounded-4xl w-50 bg-[green] text-[white] p-1 gap-2 transition my-4"
                >
                  <Phone className="size-4 " />
                  Buy Now
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 5.5, type: "spring" }} viewport={{ once: true, amount: 0.3 }}>
            <Card className="w-[350px]">
              <CardHeader>
                <motion.div initial={{ opacity: 0, rotate: 180 }} whileInView={{ opacity: 1, rotate: 0 }} transition={{ duration: 3, type: "spring" }} viewport={{ once: true, amount: 0.5 }} className="col-span-1 flex justify-center">
                  <Image className="rounded-xl object-cover" src="/assets/image1.jpg" alt="Gambar 1" width={300} height={300} />
                </motion.div>
                <CardTitle>My Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95, boxShadow: "0 0 90px 70px rgba(255, 255, 255, 1)" }}
                  className="flex items-center justify-center rounded-4xl w-50 bg-[green] text-[white] p-1 gap-2 transition my-4"
                >
                  <Phone className="size-4 " />
                  Buy Now
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <motion.div initial={{ opacity: 0, y: -200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 3, type: "spring" }} viewport={{ once: true, amount: 0.5 }}>
          <Parallax />
        </motion.div>
        {/* <HouseDrawing /> */}
      </div>

      <div className="grid grid-cols-4 gap-10 p-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 2, type: "spring" }}
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-1 flex justify-center"
        >
          <Image className="rounded-xl object-cover" src="/assets/image1.jpg" alt="Gambar 1" width={220} height={220} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 2.5, type: "spring" }}
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-1 flex justify-center"
        >
          <Image className="rounded-xl object-cover" src="/assets/image2.jpg" alt="Gambar 2" width={220} height={220} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 3, type: "spring" }}
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-1 flex justify-center"
        >
          <Image className="rounded-xl object-cover" src="/assets/image1.jpg" alt="Gambar 1" width={220} height={220} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 3.5, type: "spring" }}
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-1 flex justify-center"
        >
          <Image className="rounded-xl object-cover" src="/assets/image2.jpg" alt="Gambar 2" width={220} height={220} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 4, type: "spring" }}
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-1 flex justify-center"
        >
          <Image className="rounded-xl object-cover" src="/assets/image1.jpg" alt="Gambar 1" width={220} height={220} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 4.5, type: "spring" }}
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-1 flex justify-center"
        >
          <Image className="rounded-xl object-cover" src="/assets/image2.jpg" alt="Gambar 1" width={220} height={220} />
        </motion.div>
      </div>

      <div></div>
    </div>
  );
}
